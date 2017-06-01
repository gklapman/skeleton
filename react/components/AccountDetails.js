import React from 'react';
import {Field, reduxForm} from 'redux-form'

const AccountDetails= ({handleSubmit}) => {


  return (
    <div className="createaccount-details" >
      <div className="createaccount-item">
        <h2 className="create-header">Thanks for Creating an Account</h2>
        <h3 className="create-better">Make your account even better</h3>
    	  <form className="form-group" onSubmit={handleSubmit}>
          <div>
            <label>Birthday</label>
            <div className="">
              <Field className='form-control black' name="birthday" component="input" type="date" placeholder="First Name"/>
            </div>
          </div>
          <div>
            <label>Current City</label>
            <div>
              <Field className='form-control black' name="current_city" component="input" type="text" placeholder="Last Name"/>
            </div>
          </div>
          {<div>
            <label>Gender</label>
            <div>
              <label><Field name="gender" component="input" type="radio" value="male"/> Male</label>
              <label><Field name="gender" component="input" type="radio" value="female"/> Female</label>
            </div>
          </div>}
          <div>
            <button className='btn btn-primary' type="submit">Submit</button>
          </div>
          <div> 
            <button>Skip for now</button>
          </div>
        </form>
      </div>
    </div>

  )
 

}
	


export default reduxForm({
  form: 'createaccountdetails',
 //can include an onSubmit key  // a unique name for this form
})(AccountDetails);

