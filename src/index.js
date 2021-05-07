module.exports = class SimpleCalculator {
    constructor() {
        this.time = Date.now()
    }
    start(calc = '') {
        
        if (typeof calc === 'string') {
            throw Error('The entrance is a string')
        }
        let data = {    }
        let time = this.time
        function calcResult() {
            if (calc.length === 0) {
                data = {
                    error: true,
                    errorInfo: 1,
                    time: Date.now() - time,
                    input: `${calc}`,
                    result: ''
                }
            }
            try {
                const a = `${calc}`.replace(/([\D+])/g, '')
                let haveString = false
                let haveNaN = false
                const b = calc
                            .replace(/([*])/g, ' * ')
                            .replace(/([\+])/g, ' + ')
                            .replace(/([\/])/g, ' / ')
                            .replace(/([\\])/g, ' \\ ')
                            .replace(/([%])/g, ' % ')
                            .match(/([0-9\t\*\t+\t\/\t\\\t%])/g)
                            .map(e => {
                                switch(e) {
                                    case '*':
                                        return ' * '
                                    break;
                                    case '+':
                                        return  ' + '
                                    break;
                                    case ' / ':
                                        return ' / '
                                    break
                                    case '\\':
                                        return ' \\ '
                                    break;
                                    case '%':
                                        return ' % '
                                    break;
                                    default:
                                        if (isNaN(Number(e)) === true) {
                                            haveNaN = true
                                            return ` (>> ${e} <<) `
                                        }
                                        switch (typeof Number(e)) {
                                            case 'bigint':
                                                haveString = true
                                            return null
                                            break;
                                            case 'boolean':
                                                haveString = true
                                            return null
                                            break;
                                            case 'function':
                                                haveString = true
                                            return null
                                            break;
                                            break;
                                            case 'object':
                                                haveString = true
                                            return null
                                            break;
                                            case 'string':
                                                haveString = true
                                            return null
                                            break;
                                            case 'symbol':
                                                haveString = true
                                            return null
                                            break;
                                            case 'undefined':
                                                haveString = true
                                            return null
                                            break;
                                            default:
                                                return e
                                             
                                        }
                                      
                                }
                            })
                if (haveNaN === true) {
                    data = {
                        error: true,
                        errorInfo: 3,
                        time: Date.now() - time,
                        input: `${b.join('')}`,
                        result: 0
                    }
                    return
                }
                if (haveString === true) {
                    data = {
                        error: true,
                        errorInfo: 2,
                        time: Date.now() - time,
                        input: `${b.join('')}`,
                        result: 0
                    }
                    return
                }
                data = {
                    error: false,
                    errorInfo: 0,
                    time: Date.now() - time,
                    input: `${b.join('')}`,
                    result: Number(`${eval(`${b.join('')}`)}`)
                }
            } catch (e) {
                data = {
                    error: true,
                    errorInfo: 4,
                    exception: e,
                    time: Date.now() - time,
                    input: `${b.join('')}`,
                    result: 0
                }
            }
        }
        calcResult()
        return data
    }
}