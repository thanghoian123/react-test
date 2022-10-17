import { cleanup, fireEvent, render } from "@testing-library/react"
import React from "react"
import { AppContext, AppProvider } from "../contexts/AppContext"
import Home from "../views/Home"
import History from "../views/History"

import HomeTest from "./HomeTest"


export const AppProviderTest = ({ children }: { children: JSX.Element }) => {
    return (
        <AppProvider>
            {children}
        </AppProvider>
    )
}

describe('Render Home', () => {
    test('add', () => {
        const { getByTestId } = render(
            <AppProvider>
                <HomeTest />
            </AppProvider>
        )
        const num1 = getByTestId('1')
        const num2 = getByTestId('2')
        const num3 = getByTestId('3')
        const plus = getByTestId('+');
        const equal = getByTestId('=');
        const result = getByTestId('result');


        fireEvent.click(num2)
        fireEvent.click(plus)
        fireEvent.click(num1)
        fireEvent.click(equal)
        // num1.click();
        expect(result.textContent).toEqual('3');

    })

    test('minus', () => {
        const { getByTestId } = render(
            <AppProvider>
                <HomeTest />
            </AppProvider>
        )
        const num1 = getByTestId('1')
        const num2 = getByTestId('2')
        const num3 = getByTestId('3')
        const minus = getByTestId('-');
        const equal = getByTestId('=');
        const result = getByTestId('result');

        fireEvent.click(num2)
        fireEvent.click(minus)
        fireEvent.click(num1)
        fireEvent.click(equal)
        // num1.click();
        expect(result.textContent).toEqual('1');
        // fireEvent.click(clear)

    })

    test('mutil', () => {
        const { getByTestId } = render(
            <AppProvider>
                <HomeTest />
            </AppProvider>
        )
        const num1 = getByTestId('1')
        const num2 = getByTestId('2')
        const num3 = getByTestId('3')
        const mutil = getByTestId('*');
        const equal = getByTestId('=');
        const result = getByTestId('result');


        fireEvent.click(num1)
        fireEvent.click(mutil)
        fireEvent.click(num2)
        fireEvent.click(mutil)
        fireEvent.click(num3)
        fireEvent.click(equal)
        expect(result.textContent).toEqual('6');
    })

    test('divide', () => {
        const { getByTestId } = render(
            <AppProvider>
                <HomeTest />
            </AppProvider>
        )
        const num1 = getByTestId('1')
        const num2 = getByTestId('2')
        const num3 = getByTestId('3')
        const divide = getByTestId('÷');
        const mutil = getByTestId('*');

        const equal = getByTestId('=');
        const result = getByTestId('result');


        fireEvent.click(num2)
        fireEvent.click(divide)
        fireEvent.click(num2)
        fireEvent.click(mutil)
        fireEvent.click(num3)
        fireEvent.click(equal)
        expect(result.textContent).toEqual('3');
    })

    test('percent', () => {
        const { getByTestId } = render(
            <AppProvider>
                <HomeTest />
            </AppProvider>
        )
        const num3 = getByTestId('3')
        const percent = getByTestId('%');
        const equal = getByTestId('=');
        const result = getByTestId('result');


        fireEvent.click(num3)
        fireEvent.click(percent)
        fireEvent.click(equal)
        expect(result.textContent).toEqual('0.03');
    })

    test('complex operator', () => {
        const { getByTestId } = render(
            <AppProvider>
                <HomeTest />
            </AppProvider>
        )
        const num1 = getByTestId('1')
        const num2 = getByTestId('2')
        const num3 = getByTestId('3')
        const divide = getByTestId('÷');
        const mutil = getByTestId('*');
        const add = getByTestId('+');
        const minus = getByTestId('-');

        const equal = getByTestId('=');
        const result = getByTestId('result');

        fireEvent.click(num2)
        fireEvent.click(mutil)
        fireEvent.click(num2)
        fireEvent.click(add)
        fireEvent.click(num3)
        fireEvent.click(mutil)
        fireEvent.click(num2)
        fireEvent.click(minus)
        fireEvent.click(num1)
        fireEvent.click(equal)
        expect(result.textContent).toEqual('9');
    })

    test('render history', () => {
        const { getByText } = render(<AppProvider>
            <History />
        </AppProvider>)

        const history = getByText('History');

        expect(history).not.toBeNull()
    })
})

// describe('Render History', ()=>{

// })