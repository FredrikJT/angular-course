//DATABINDING: Communicate between business logic (TS) and the template (HTML). 24
//BS => Template
    //String interpolation {{ data }} (output the value of a variable)
    //Property binding [property]="data" (bind some kind of data, e.g. a variable to some property of the DOM)
//Template => BS (React to user events)
    //Event binding (event)="expression"
//Two-way-binding
    //[(ngModel)]="data"

//EVENT BINDING: B


//DIRECTIVES: Directives are instructions in the DOM. E.g. ngIf
// <p *ngIf="false">This wont be shown</p>
//* says that its a sturctural directive, i.e. changing the DOM

//<p *ngIf="false; else noServer">Call noServer template</p>
//<ng-template #noServer>
//  <p>No server created</p>
//</ng-template>

//Attribute directives dont add or remove elements, they only change the element they
//are placed on.
//>p [ngStyle]="{backgroundColor: getColor()}">



getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
}