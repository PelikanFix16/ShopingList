import React from 'react';
import { render, fireEvent,waitFor,act } from '@testing-library/react-native';
import { CreateWithStore } from '../../src/Utils/TestHelpers/CreateWithStore';
import Archive from '../../src/screens/Archive'
import {store} from '../../src/redux/store'
require("../../src/Utils/mockGlobal")
import { CreateItem } from '../../src/Utils/CreateItem';
import { deleteItem,deleteFromArchive,changeToArchive,addToList } from '../../src/redux/actions';

describe("<Archive/>",()=>{
    
        let item = CreateItem("test",2);
        let archiveScreen;

        beforeEach(()=>{
            archiveScreen = CreateWithStore(<Archive/>,{store});
            act(()=>{archiveScreen.store.dispatch(addToList(item))});
            act(()=>{archiveScreen.store.dispatch(changeToArchive(item))});
            
        })

        describe("Render",()=>{
            it("Should render Date sort",()=>{
                const dateSort = archiveScreen.getByTestId("DateSort");
                expect(dateSort).toBeTruthy()
            })

            it("Should render one element in list",async ()=>{
                //props
                const flatList = await archiveScreen.getByTestId("swipeTest");
                expect(flatList).toBeTruthy();
            })

        })


        describe("Actions",()=>{
            it("Should delete item from archive and move to list",async ()=>{


                act(()=>{archiveScreen.store.dispatch(deleteFromArchive(item))});
                const flatList = await archiveScreen.queryByTestId("swipeTest");
                expect(flatList).toBeNull();
                state = archiveScreen.store.getState().listReducer;
                expect(state.archive.length).toBe(0)
                expect(state.list.length).toBe(1)   

            })
            it("Should delete item from store",async ()=>{


                act(()=>{archiveScreen.store.dispatch(deleteItem(item))});
                const flatList = await archiveScreen.queryByTestId("swipeTest");
                expect(flatList).toBeNull();
                state = archiveScreen.store.getState().listReducer;
                expect(state.archive.length).toBe(0)
            })

        })

})