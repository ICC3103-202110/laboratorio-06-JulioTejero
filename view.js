const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.yellow(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    console.log(model)
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    return [
        {'leftValue': leftValue,
        'leftUnit': leftUnit,
        'rightValue': rightValue,
        'rightUnit': rightUnit}
    ]
}

function inputForm(model){
    const message1 = ' Left temperature is source? '
    const message2 = 'Temperature value to convert? '
    const messageFromUnit = "From? "
    const messageToUnit = "To? "
    const choices = ["Celsius", "Fahrenheit", "Kelvin"]
    return inquirer.prompt([
        {
            name: 'validateLeft',
            type: 'confirm',
            message: message1,
            default: "Y/n",
        },
        {
            name: 'initTemperature',
            type: 'number',
            message: message2,
            default: 0,
        },
        {
            name: 'fromUnit',
            type: 'list',
            message: messageFromUnit,
            choices: choices
        },
        {
            name: 'toUnit',
            type: 'list',
            message: messageToUnit,
            choices: choices
        }
            
        
    ])
}




function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view,
    inputForm
}