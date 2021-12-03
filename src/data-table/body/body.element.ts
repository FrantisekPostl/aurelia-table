import { bindable } from 'aurelia-framework';

export class BodyCustomElement {
    @bindable()
    protected rows!: string[];

}
