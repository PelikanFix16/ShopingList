import React from 'react';
import { render, fireEvent,waitFor,act } from '@testing-library/react-native';
import RenderItem from '../../src/components/ListView';
import { RenderFunction } from '../../src/Utils/RenderFunctions/RenderRightArchivize';

const createRenderItem = (leftFn,rightFn) => {
    const item = {
        title:"test",
        amount:2,
        time:Date.now()
    }
    return render(
    <RenderItem renderIconLeft="check" renderColorLeft="#8afb65" 
    renderFunctionLeft={RenderFunction} onLeftOpen={leftFn}
    renderIconRight="edit" renderColorRight="#FEEE6C" renderFunctionRight={RenderFunction}
    onRightOpen={rightFn}
    item={item}/>);
}


describe("<RenderItem/>",()=>{

    let li;
    let fnRight;
    let fnLeft;

    beforeEach(()=>{
        fnRight = jest.fn();
        fnLeft = jest.fn();
        li = createRenderItem(fnLeft,fnRight)
    })


    it("Should render item",()=>{
        expect(li).not.toBeNull();

    })

    it("Should render item with title test",async ()=>{
        const item = await li.findByText("test");
        expect(item).not.toBeNull();
    })




})