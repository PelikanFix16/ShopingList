import React from 'react';
import {fireEvent, render,waitFor} from '@testing-library/react-native';
import DateSort from '../../src/components/DateSort';


const createDateSort = (icon,event)=>{
    return render(<DateSort icon={icon} event={event}/>);
}



describe("<DateSort/>",()=>{

    let fn;
    let dat;
    let icon = true;
    beforeEach(()=>{
        fn = jest.fn();
        dat = createDateSort(icon,fn);
    })

    describe("Touchable",()=>{
        it("Should render button",()=>{
            expect(dat.getByTestId("callButton")).toBeTruthy();
        })
        it("Should call event",()=>{
            fireEvent.press(dat.getByTestId("callButton"));
            expect(fn).toBeCalled();
        })
    })

    describe("Icon",()=>{
        it("Should render icon",()=>{
   
            expect(dat.getByTestId("icon")).not.toBeNull();
        })

        
    })
})