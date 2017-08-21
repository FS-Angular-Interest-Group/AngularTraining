# @angular/-server服务端渲染模式配置
1. Package Install
``` sh
cnpm i -g @angular/cli@latest
ng new ng-lazyload-starter --routing --style=scss
cd ng-lazyload-starter
cnpm i -D ts-node
cnpm i -S @angular/-server @angular/animations
cnpm i -S @angular/material @angular/cdk
```

2. Update src/app/app.module.ts
``` sh
import { BrowserModule } from '@angular/-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 当打包部署静态包时，需要加载本Module，当使用服务端渲染时，请注释
// import { SPAModule } from '../pages/spa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-lazyload-starter'}),
    AppRoutingModule,
    // SPAModule, // 静态打包时加载
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

3. Add New src/app-routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// SSR模式路由，服务端渲染
const SSRroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
  { path: 'about', loadChildren: '../pages/about/about.module#AboutModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

// SPA模式路由，客户端打包，若不使用请注释
import { HomePageComponent } from '../pages/home/home-page/home-page.component';
import { AboutPageComponent } from '../pages/about/about-page/about-page.component';
const SPAroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
];

// 配置路由模式
const routes = SSRroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

4. Update src/tsconfig.app.json, IMPORTANT:**"baseUrl": "/",**
``` js
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "baseUrl": "/",
    "module": "es2015",
    "baseUrl": "",
    "types": []
  },
  "exclude": [
    "server.ts",
    "test.ts",
    "**/*.spec.ts"
  ]
}
```

5. Update src/tsconfig.json
``` js
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "baseUrl": "src",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es5",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2016",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "genDir": "./dist/ngfactory",
    "entryModule": "./src/app/app.module#AppModule"
  }
}
```

6. Create a express.js server: src/server.ts
``` js
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { Server, renderModuleFactory } from '@angular/-server'
import { enableProdMode } from '@angular/core'
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory'
import * as express from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = 4000;

enableProdMode();

const app = express();

let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src')

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
  res.render('index', { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
```

7. Update scripts on package.json, new scripts:
``` js
  "scripts": {
    "server:build": "ng build --prod && ngc",
    "server": "ts-node src/server.ts"
  },
```

8. Run Build && Server Command
```
npm run server:build
npm run server
```