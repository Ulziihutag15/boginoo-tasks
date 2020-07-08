
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const Button = (props) => {
    let { children, disabled, className, ...others } = props;
   
        // // https://boginoo.firebaseapp.com/button

        // Button component-ийн жишээ

            // <Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 w-8 ph-4 mt-3 b-primary" disabled>Богиносгох</Button>
           
     /* 

        - children props -ийг button element-ийн тодор render хийнэ

        - className props -оор дамжуулан button-ний style өөрчилж болдог байх

        - disabled class -ийг components.scss file-д тодорхойлж бичих pointer-events, opacity тохируулах

        - бусад дамжуулсан others props ийг button элемэнт дээр нэмж өгөх ингэснээр onClick event өөр ямар хамаагүй props-ийг нэмж ашиглах боломжтой болно

        HINT: className={`btn ${className} ${disabled && 'disabled'}`}
      
    */
    return (
        <button className = {`btn ${className} ${disabled && 'disabled'}`} {...others}>{children}</button>
    );
};