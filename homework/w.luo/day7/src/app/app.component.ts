import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
}

export const  employeeList = [{'name':'Lawrence',
'sex' : 'M',
'project': 'PCA',
'position': 'TL',
'weight': 68.3,
'birthday': "01-07-1988"
},
{'name':'Sam',
'sex' : 'M',
'project': 'PCA',
'position': 'SSE',
'weight': 63.6,
'birthday': "12-05-1985"
},
{'name':'Lily',
'sex' : 'F',
'project': 'AXA',
'position': 'SE',
'weight': 43.3,
'birthday': "11-23-1984"
},
{'name':'May',
'sex' : 'F',
'project': 'MTL',
'position': 'ASE',
'weight': 47.9,
'birthday': "12-30-1976"
}
]
