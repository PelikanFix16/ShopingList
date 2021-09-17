import React from 'react';
import renderer from 'react-test-renderer';

import Archive from '../../src/screens/Archive';

describe("Archive Screen render",()=>{

    const archive = renderer.create(<Archive/>).toJSON();

    it("Should render SafeAreaView",()=>{
        expect(archive.type).toContain("SafeAreaView");

    })


})