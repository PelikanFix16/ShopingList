import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../../src/screens/Home';


describe("Home Screen render",()=>{

    
    const main = renderer.create(<Home/>).toJSON();
    
    it("Should render SafeAreaView",()=>{
        expect(main.type).toContain("SafeAreaView");
    })


});