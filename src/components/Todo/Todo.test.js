import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from "./index";

describe("Todo tests", () => {
    let button, input;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<Todo/>)
        button = screen.getByText("Add")
        input = screen.getByLabelText("Text")
    })

    test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
        const items = screen.getAllByText(/Item/i)
        expect(items.length).toEqual(3)
    })

    test("Input ve button dökümanda bulunmalı", () => {
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    test("Input'a string girilip butona basılınca listeye eklenmeli", () => {
        const name = "Abdulhakim"
        // type metodu ile iki parametre alınır birincisi hangi input a yazacaksın ikincisi ne yazacaksın
        userEvent.type(input, name)

        // button a tıkla
        userEvent.click(button)

        // assertion
        expect(screen.getByText(name)).toBeInTheDocument()
    })
})