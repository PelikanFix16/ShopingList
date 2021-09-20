import React from 'react';
import { render, fireEvent,waitFor,act } from '@testing-library/react-native';
import { CreateWithStore } from '../../src/Utils/TestHelpers/CreateWithStore';
import Add from '../../src/screens/Add';
import { store } from '../../src/redux/store';
require("../../src/Utils/mockGlobal");



describe("<Add/>",()=>{
    let addScreen;
    beforeEach(()=>{
        addScreen = CreateWithStore(<Add/>,{store});
    })


    describe("Render",()=>{
        it("Should render",()=>{
            expect(addScreen).not.toBeNull();

        })
        it("Should render title",()=>{
            const title = addScreen.findByTestId("titleAddElement");
            expect(title).not.toBeNull();

        })
        it("Should render counter if title is not empty",async ()=>{
            fireEvent.changeText(addScreen.getByTestId("titleInput"),"test");
            const incrementBtn = await addScreen.getByTestId("increment");
            expect(incrementBtn).not.toBeNull();
        })

        it("Should render circle button when increment", async ()=>{
            fireEvent.changeText(addScreen.getByTestId("titleInput"),"test");
            const incrementBtn = await addScreen.getByTestId("increment");
            fireEvent.press(incrementBtn);
            const circleButton = await addScreen.getByTestId("callButton");
            expect(circleButton).not.toBeNull();
        })

    })


    describe("Redux test",()=>{
        it("Should add item to store with title: test and amount: 1",async ()=> {
            fireEvent.changeText(addScreen.getByTestId("titleInput"),"test");
            const incrementBtn = await addScreen.getByTestId("increment");
            fireEvent.press(incrementBtn);
            const circleButton = await addScreen.getByTestId("callButton");
            fireEvent.press(circleButton);
            const {title,amount} = store.getState().listReducer.list[0];
            expect(title).toBe("test");
            expect(amount).toBe(1);
   

        })
  
    
    })



})
