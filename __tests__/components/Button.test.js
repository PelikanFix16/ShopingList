import React from 'react';
import {fireEvent, render,waitFor} from '@testing-library/react-native';
import CircleButton from '../../src/components/Button';



const createCircleButton = (fn) => {
    const iconName = "add";
    const color = "#8afb65";
    const size = 50;

    return render(<CircleButton add={fn} iconName={iconName} color={color} size={size}/>);
}

describe("<CircleButton/>",()=>{
    let fn;
    let btnl
    beforeEach(()=>{
        fn = jest.fn();
        btn = createCircleButton(fn);


    })


    describe("Touchable opacity",()=>{
        it("Should render",()=>{
            expect(btn.getByTestId("callButton")).toBeTruthy()
        })
    
        it("should call the function",()=>{
        
            fireEvent.press(btn.getByTestId("callButton"));
            expect(fn).toBeCalled();
        })
    })

    describe("Icon",()=>{

    it("Should render icon",()=>{
        
        
        expect(btn.getByTestId("icon")).toBeTruthy();
        


    })  
})




    
});