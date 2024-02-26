const validator = (formData) => {
    let tempErrors = {}
    let valid = true

    if (formData.name) {
        if (formData.name.length < 3) {
            tempErrors = { ...tempErrors, name: { message: "Restaurant Name must be at least 3 characters long." } }
            valid = false
        }
        else if (formData.name.length > 100) {
            tempErrors = { ...tempErrors, name: { message: "Restaurant Name must be at most 100 characters long." } }
            valid = false
        }
    }
    else valid = false

    if (formData.number !== "") {
        if (formData.number < 1) {
            tempErrors = { ...tempErrors, number: { message: "Restaurant Number must be a positive integer." } }
            valid = false
        }
        else if ([1049, 36, 245, 20937, 4].includes(Number(formData.number))) {
            tempErrors = { ...tempErrors, number: { message: `${Number(formData.number)} is a banned restaurant number!` } }
            valid = false
        }
    }
    else valid = false


    if (![true, false].includes(formData.isOpen)) {
        tempErrors = { ...tempErrors, isOpen: { message: "Restaurant open status is either only true or false." } }
        valid = false
    }

    return [tempErrors, valid]
}

export default validator