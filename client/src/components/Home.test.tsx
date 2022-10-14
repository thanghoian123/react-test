import * as React from "react";
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Home from "./Home";

global.IS_REACT_ACT_ENVIRONMENT = true

describe('Home', function () {
   it('should display', function () {
       const container = document.createElement('div');
       document.body.appendChild(container);
       act(() => {
        const root =createRoot(container);
        root.render(<Home/>)
       })
       const header = container.querySelector('h1') as HTMLHeadingElement;
       expect(header.textContent).toBe("Home page")
   });
});