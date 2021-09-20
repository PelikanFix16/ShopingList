import React from 'react';
import { render, fireEvent,waitFor,act } from '@testing-library/react-native';
import { CreateWithStore } from '../../src/Utils/TestHelpers/CreateWithStore';
import Edit from '../../src/screens/Edit';
import { store } from '../../src/redux/store';
require("../../src/Utils/mockGlobal");
import {CreateItem} from '../../src/Utils/CreateItem';
import {getEditItem,editItem,addToList} from '../../src/redux/actions';

describe("<Edit/>",()=>{

    let item = CreateItem("test",1);
    let editScreen;

    beforeEach(()=>{
        editScreen = CreateWithStore(<Edit/>,{store});
        act(()=>{editScreen.store.dispatch(addToList(item))});
        act(()=>{editScreen.store.dispatch(getEditItem(item))});

    })

    describe("Render",()=>{
        it("Should render edit title",()=>{
            const title = editScreen.getByTestId("editTitle");
            expect(title).not.toBeNull();
        }) 
        it("Should render text input",()=>{
            const title = editScreen.getByTestId("editInput");
            expect(title).not.toBeNull();
        }) 
        it("should render text input with text: test",()=>{
            const title = editScreen.getByTestId("editInput");
            expect(title.props.value).toEqual("test");

        })
        it("should render counter with value: 2",async ()=>{
            const value = await editScreen.getByTestId("counterText");
      
            expect(value.props.children).toEqual(1)

        })
        it("should render 3 circle buttons",async ()=>{
            const circleButton = await editScreen.queryAllByTestId("callButton");
       
            expect(circleButton.length).toBe(3)

        })

    })

    describe("Functionality",()=>{
        it("Should hide counter if text input is empty",async ()=>{
            fireEvent.changeText(editScreen.getByTestId("editInput"),"");
            const title = await editScreen.queryByTestId("counterText");
            expect(title).toBeNull();
           
        })
        it("Should hide save icon if text input is empty",async ()=>{
            fireEvent.changeText(editScreen.getByTestId("editInput"),"");
            const circleButton = await editScreen.queryAllByTestId("callButton");
            expect(circleButton.length).toBe(2)
           
        })
        it("Should hide save icon if counter is 0",async ()=>{
 
            const circleButton = await editScreen.getByTestId("decrement");
            fireEvent.press(circleButton)
            const circleButtons = await editScreen.queryAllByTestId("callButton");
            expect(circleButtons.length).toBe(2)
           
        })
    })

    describe("Redux functionality",()=>{
        it("Should modify item name in store to test2",async ()=>{
            fireEvent.changeText(editScreen.getByTestId("editInput"),"test2");
            const circleButtons = await editScreen.queryAllByTestId("callButton");
            fireEvent.press(circleButtons[1]);
            
            expect(editScreen.store.getState().listReducer.edit.title).toBe("test2");
            
        })
        it("Should modify item amount in store",async ()=>{
            const circleButton = await editScreen.getByTestId("increment");
            await fireEvent.press(circleButton)
            const circleButtons = await editScreen.queryAllByTestId("callButton");
            await fireEvent.press(circleButtons[1]);
       
            expect(editScreen.store.getState().listReducer.edit.amount).toBe(2);

            
        })


    })



})

