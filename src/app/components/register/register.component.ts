import { Component, OnInit, NgModule } from '@angular/core';
// import { UserService } from 'src/app/services/user-service/user.service';
// import { BatchService } from 'src/app/services/batch-service/batch.service';
import { Batch } from '../../models/batch';
import { Router, RouterModule } from '@angular/router';
import { ValidationService } from '../../services/validation-service/validation.service';
import { User } from '../../models/user';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { OfficeServiceService } from '../../services/office-service.service';

@Component({
	selector: 'app-user-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})

@NgModule({
    imports: [
       RouterModule
	 ]
	})
/**
 * This is the Driver Register
 */

export class RegisterComponent implements OnInit {

	batches: Batch[] = [];
	user: User = new User();

  /**
   * @constructor 
   * @param router Provides an instance of a router.
   * @param userService A dependency of an user service is injected.
   * @param batchService A dependency of a batch service is injected.
   */

	constructor(private userService: EmployeeServiceService, private batchService: OfficeServiceService, private router: Router, public validationService: ValidationService) { }


  /**
   * This is an OnInit function that sets the token to the parsed token string.
   * The system will check if the token is valid; once validated a batch service is called.
   */
	ngOnInit() {
		if (sessionStorage.getItem('auth')) {
			this.router.navigate(['home']);
		} else {
			/*this.batchService.getAllBatches()
				.subscribe(allBatches => {
					this.batches = allBatches;
					this.user.batch.batchNumber = this.batches[0].batchNumber;
			});*/
		}
	}

	/**
	 * This function allows the user to select the batch location.
	 */
	changeLocation(event) {
		let option = event.target.options.selectedIndex;
		this.user.batch.batchNumber = this.batches[option].batchNumber;
	}


}