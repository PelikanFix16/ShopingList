import React from 'react';
import { render, fireEvent,waitFor,act } from '@testing-library/react-native';
import { CreateWithStore } from '../../src/Utils/TestHelpers/CreateWithStore';
import Home from '../../src/screens/Home';
import { store } from '../../src/redux/store';

require("../../src/Utils/mockGlobal");
import {CreateItem} from '../../src/Utils/CreateItem';
import {addToList,changeToArchive} from '../../src/redux/actions';




describe("<Home/>",()=>{
    let item = CreateItem("test",2);
    let homeScreen;
    beforeEach(()=>{
        
 
        //console.log(store.getState())
        homeScreen = CreateWithStore(<Home/>,{store});
        act(()=>{homeScreen.store.dispatch(addToList(item))});
     
    

        
       
    })


    describe("Render",()=>{
        
        it("Should render Date sort",()=>{
            const dateSort = homeScreen.getByTestId("DateSort");
            expect(dateSort).toBeTruthy()
        })

        it("Should render one element in list",async ()=>{
            //props
            const flatList = homeScreen.getByTestId("swipeTest");
            expect(flatList).toBeTruthy();
        })

    })

    it("Should move to archivize",()=>{
        act(()=>{homeScreen.store.dispatch(changeToArchive(item))});
        let element = homeScreen.queryByText("test");
        expect(element).toBeNull();
    })
})