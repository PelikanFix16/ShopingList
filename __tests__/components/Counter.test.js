import React from 'react';
import {fireEvent, render,waitFor} from '@testing-library/react-native';
import Counter from '../../src/components/Counter';


const createCounter = (fn,value) => {
    return render(<Counter setCounter={fn} counter={value}/>)
}

describe("<Counter/>",()=>{


    let fn;
    let coun; 
    let val = 0;
    beforeEach(()=>{
        fn = jest.fn();

        coun = createCounter(fn,val);
    });





    describe("Touchable",()=>{
        it("Should render increment",()=>{
            //expect(coun.queryByTestId("iconPlus")).toBeTruthy();
            expect(coun.getByTestId("increment")).toBeTruthy();
        })

        it("Should render decrement",()=>{
            //expect(coun.queryByTestId("iconPlus")).toBeTruthy();
            expect(coun.getByTestId("decrement")).toBeTruthy();
        })

        it("Should press increment and value should be 1",()=>{
           fireEvent.press(coun.getByTestId("increment"));
           expect(fn).toHaveBeenCalledWith(1);
           val++;
        })
        it("Should press decrement and value should be 0",()=>{
            fireEvent.press(coun.getByTestId("decrement"));
            expect(fn).toHaveBeenCalledWith(0);
            val--;
            
         })


    })

    describe("Text",()=>{
        it("Should render text",()=>{
            //expect(coun.queryByTestId("iconPlus")).toBeTruthy();
            expect(coun.getByTestId("counterText")).toBeTruthy();
        })
        it("Should render text with 0 value",()=>{
            expect(coun.queryByText("0")).not.toBeNull();
        })
    })
    describe("icon render",()=>{
        it("should render icon plus",()=>{
            expect(coun.getByTestId("iconPlus")).toBeTruthy();
        })
        it("should render icon minus",()=>{
            expect(coun.getByTestId("iconMinus")).toBeTruthy();
        })


    })




})