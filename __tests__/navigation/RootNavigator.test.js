import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent,waitFor,act } from '@testing-library/react-native';
import RootNavigaton from '../../src/navigation/RootNavigation';
import { CreateWithStore } from '../../src/Utils/TestHelpers/CreateWithStore';


const nodeCrypto = require('crypto');
window.crypto = {
  getRandomValues: function (buffer) {
    return nodeCrypto.randomFillSync(buffer);
  }
};



describe("<RootNavigator/>",()=>{

    let navi;

    beforeEach(()=>{
        navi = CreateWithStore(<RootNavigaton/>);
    })

    it("should render navigator",()=>{
       
        expect(navi).toBeTruthy(); 
    })

    it("Should render Home navigation",()=>{
        expect(navi.queryByText("Home")).toBeTruthy();
    })

    it("Should render Archive navigation",()=>{
        expect(navi.queryByText("Archive")).toBeTruthy();
    })


    it("Should render Add navigation",()=>{
        expect(navi.queryByText("Add")).toBeTruthy();
    })

    it("Should navigate to Add screen",async ()=>{
        await act(async ()=>{
            const btn = navi.queryByText("Add");
  

            fireEvent.press(btn);

        const newScreen = await navi.findByTestId("titleAddElement");
  
       expect(newScreen).toBeTruthy();
        })

    })

})