import *as React from "react";
import '../src/register.css';
import { Link } from "react-router-dom";
function Reg(){
  return(
    <div className="as">
<div class="form">
      <div class="title">Welcome</div>
      <div class="subtitle">Let's create your account!</div>

      <div class="input-container ic1">
        <input placeholder="" type="text" class="input" id="firstname"></input>
        <div class="cut"></div>
        <label class="iLabel" for="firstname">First name</label>
      </div>

      <div class="input-container ic2">
        <input placeholder="" type="text" class="input" id="lastname"></input>
        <div class="cut"></div>
        <label class="iLabel" for="lastname">Last name</label>
      </div>
      <div class="input-container ic2">
        <input placeholder="" type="text" class="input" id="email"></input>
        <div class="cut cut-short"></div>
        <label class="iLabel" for="email">Email</label>
      </div>
      <Link to="/home"><button class="submit" type="text">submit</button></Link>
      <Link to="/"><div className="po">Already have a Account? Login</div></Link>
    </div>
    </div>
  )
}
export default Reg;