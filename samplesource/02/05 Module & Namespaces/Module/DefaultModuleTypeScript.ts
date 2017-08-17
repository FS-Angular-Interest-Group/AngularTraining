import MyDefaultModule from './interface.DefaultModule';

const numberRegexp = /^[0-9]+$/;

export class DefaultModuleTypeScript implements MyDefaultModule {
    doCheck(str: string) {
        return numberRegexp.test(str);
    }
}