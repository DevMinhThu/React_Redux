const rewire = require("rewire")
const AddView = rewire("./AddView")
const addTask = AddView.__get__("addTask")
// @ponicode
describe("addTask", () => {
    test("0", () => {
        let callFunction = () => {
            addTask("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            addTask("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            addTask("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            addTask("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            addTask("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            addTask(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
