import React from 'react';
import {Field, reduxForm} from 'redux-form'

const CreateAccount = ({handleSubmit}) => {

	return (
	 <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field name="first_name" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name="last_name" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
       <div>
        <label>Password</label>
        <div>
          <Field name="password" component="input" type="text" placeholder="Password"/>
        </div>
      </div>
      <div>
        <label>Gender (optional)</label>
        <div>
          <label><Field name="gender" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="gender" component="input" type="radio" value="female"/> Female</label>
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>

	)

}
	


export default reduxForm({
  form: 'createaccount',
 //can include an onSubmit key  // a unique name for this form
})(CreateAccount);


// <div className="create-account">
// 		<form onSubmit={handleSubmit}>
// 			<div className="form-group">
// 				<label>Email</label>
// 				<Field
// 					name="formEmail"
// 					type="email"
// 					className="form-control"
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label>Password</label>
// 				<Field 
// 					name="formPassword"
// 					type="password"
// 					className="form-control"
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label>First Name</label>
// 				<Field 
// 					name="formFirstName"
// 					type="text"
// 					className="form-control"
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label>Last Name</label>
// 				<Field 
// 					name="formLastName"
// 					component="input"
// 					type="text"
// 					className="form-control"
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label>Birthday</label>
// 				<Field 
// 					name="formBirthday"
// 					type="date"
// 					className="form-control"
// 				/>
// 			</div>
// 			<div className="form-group">
// 				<label>Gender (optional)</label>
// 				  <div>
//          			 <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
//          			 <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
//        			 </div>
// 			</div>
// 			<button className="btn btn-block btn-primary" type="submit">Create Account</button>
// 		</form>
		
// 	</div>