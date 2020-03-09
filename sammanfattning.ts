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

//LOCAL REFERENCE: A reference to an element in a HTML file. 73
// <input
// type="text"
// #inputEl>

// <p>inputEl.value</p>


//VIEWCHILD: Access a local element REFERENCE in the TS file. 75
//To access inputEl in the TS file for that component, write:
//@Viewchild('inputEl') inputElName;
//Now you can access inputElName
//äDo not edit the DOM through the Viewchild representation of an element. use e.g. property binding instead.

//NG-CONTENT: Access data from inside the closing tags of a component reference.
//Parent component:
    // <app-data-component
        // <p>dataElement.value</p>
        // >
    // </app-data-component>
//Child component:
//<div>
    //<ng-content></ng-content>
//</div>


//CONTENTCHILD:...