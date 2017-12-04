import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-reactive',
    templateUrl: './reactive.component.html',
    styleUrls: ['./reactive.component.css']

})

export class ReactiveComponent {
    reactiveForm: FormGroup;
    name: string;
    email: string;
    password: string;
    branch:string;
    college:string;
    address: string;
    info: any;
    constructor(
        private fb: FormBuilder
    ) {
        this.reactiveForm = this.fb.group({
            'name': [null, Validators.required],
            'email': [name, Validators.required],
            'password': [name, Validators.required],
            'address': [name, Validators.required],
            'branch':[null,Validators.required],
            'college':[null,Validators.required]

        })

    }
    submitForm(info) {
        this.name = info.name;
        this.email = info.email;
        this.password = info.password;
        this.address = info.address;
        this.branch= info.branch;
        this.college=info.college;
        console.log(info);
    }

}