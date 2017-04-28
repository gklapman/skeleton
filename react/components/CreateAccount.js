import React from 'react';
import {Field, reduxForm} from 'redux-form'

const CreateAccount = ({handleSubmit}) => {

    {/*<div id="earth">*/}
  return (
    <div className="createaccount">
    <div className="createaccount-item">
    <h2 className="create-header">Create Your Own TrvlPage</h2>
	 <form className="form-group" onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div className="">
          <Field className='form-control white' name="first_name" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field className='form-control' name="last_name" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field className='form-control' name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
       <div>
        <label>Password</label>
        <div>
          <Field className='form-control' name="password" component="input" type="text" placeholder="Password"/>
        </div>
      </div>
      {/*<div>
        <label>Gender (optional)</label>
        <div>
          <label><Field name="gender" component="input" type="radio" value="male"/> Male</label>
          <label><Field name="gender" component="input" type="radio" value="female"/> Female</label>
        </div>
      </div>*/}
      <div>
        <button className='btn btn-primary' type="submit">Submit</button>
      </div>
    </form>
    </div>
    </div>

  )
    {/*</div>*/}

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