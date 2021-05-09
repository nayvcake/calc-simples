module.exports = class SimpleCalculator {
	constructor() {
		this.time = Date.now();
	}
	start(calc = '') {
		if (typeof calc === 'string') {
		} else {
			throw Error('The entrance is a string');
		}

        if (calc.length === 0) {
            throw Error('This string is empty');
            return
        }
		let data = {};
		let time = this.time;
		function calcResult() {
			if (calc.length === 0) {
				data = {
					error: true,
					errorInfo: 1,
					time: Date.now() - time,
					input: `${calc}`,
					result: '',
				};
			}
			try {
				let haveString = false;
				let haveNaN = false;
                let detectError = 0;
                let passe = -1
                let invalidreturn = false;

				const detectString = calc
					.replace('-', '{0}')
					.match(
						/([A-Z-A-za-z\(\)\.\'\"]+)/g
					);
				switch (detectString) {
					case null:
						break;
					default:
						haveString = true;
				}
				if (haveString === true) {
					data = {
						error: true,
						errorInfo: 2,
						time:
							Date.now() -
							time,
						input: `${calc}`,
						result: 0,
					};
					return;
				}
				const first = calc
					.replace(
						/([A-Z-A-za-z\(\)\.\'\"]+)/g,
						''
					)
					.replace(/([\D+])/g, '')
					.replace(/([*])/g, ' * ')
					.replace(/([\+])/g, ' + ')
					.replace(/([\/])/g, ' / ')
					.replace(/([\\])/g, ' \\ ')
					.replace(/([%])/g, ' % ')
					.match(
						/([0-9\t\*\t+\t\/\t\\\t%])/g
					);

				let b = [];
                let detected = 0
                const pObject  = ['*', '+', '/', '%', ' * ', ' + ', ' / ', ' % ']
				if (typeof first.length === null) {
					data = {
						error: true,
						errorInfo: 5,
						time:
							Date.now() -
							time,
						input: `${b.join(
							''
						)}`,
						result: 0,
					};
					return;
				}
                let nbObject = -1
                let arrayObject_1 = []
				if (first.length > 1) {
					b = calc
						.replace(
							/([*])/g,
							' * '
						)
						.replace(
							/([\+])/g,
							' + '
						)
						.replace(
							/([\/])/g,
							' / '
						)
						.replace(
							/([\\])/g,
							' \\ '
						)
						.replace(
							/([%])/g,
							' % '
						)
						.match(
							/([0-9\t\*\t+\t\/\t\\\t%])/g
						)
						.map((e) => {
                            nbObject++
							switch (
								e
							) {
								case '*':
                                
                                    arrayObject_1.push(e)
                                    detected++
                                    if (detected > 1) {
                                        invalidreturn = true
                                    }
                                    if (nbObject === 0) {
                                        invalidreturn = true
                                    }
                                    if (passe === -1) {
                                        passe = 1
                                    }
                                    if (passe === 0) {
                                        passe = 1
                                    }
                                    if (detectError === 1) {
             
                                        invalidreturn = true
                                    }
                                    detectError = 1
									return ' * ';
									break;
								case '+':
                                    arrayObject_1.push(e)
                                    detected++
                                    if (detected > 1) {
                                        invalidreturn = true
                                    }
                                    if (nbObject === 0) {
                                        invalidreturn = true
                                    }
                                    if (passe === -1) {
                                        passe = 1
                                    }
                                    if (passe === 0) {
                                        passe = 1
                                    }
                                    if (detectError === 1) {
             
                                        invalidreturn = true
                                    }
									return ' + ';
                        
									break;
								case ' / ':
                                    
                                    arrayObject_1.push(e)
                                    detected++
                                    if (detected > 1) {
                                        invalidreturn = true
                                    }
                                    if (nbObject === 0) {
                                        invalidreturn = true
                                    }
                                    if (passe === -1) {
                                        passe = 1
                                    }
                                    if (passe === 0) {
                                        passe = 1
                                    }
                                    if (detectError === 1) {
             
                                        invalidreturn = true
                                    }
									return ' / ';
                            
									break;
								case '%':
                                    arrayObject_1.push(e)
                                    detected++
                                    if (detected > 1) {
                                        invalidreturn = true
                                    }
                                    if (nbObject === 0) {
                                        invalidreturn = true
                                    }
                                    if (passe === -1) {
                                        passe = 1
                                    }
                                    if (passe === 0) {
                                        passe = 1
                                    }
                                    if (detectError === 1) {
             
                                        invalidreturn = true
                                    }
                                
									return ' % ';
									break;
                                case '':
                                    if (passe === 2) {
                                        passe = 0
                                    }
                                    if (passe === 1) {
                                        passe = 2
                                    }
                                    arrayObject_1.push(e)
                                    return ''
                                break;
								default:
                                    detected++
                                    if (passe === 1) {
                                        invalidreturn = true
                                    }
                                    if (passe === 0) {
                                        passe = 1
                                    }
                                    detectError = 0
                                    if (detectError === 0) {
                                        invalidreturn = false
                                    }
                                   
									if (
										isNaN(
											Number(
												e
											)
										) ===
										true
									) {
										haveNaN = true;
										return ` (>> ${e} <<) `;
									}


									switch (
										typeof Number(
											e
										)
									) {
										case 'bigint':
											haveString = true;
											return null;
											break;
										case 'boolean':
											haveString = true;
											return null;
											break;
										case 'function':
											haveString = true;
											return null;
											break;
											break;
										case 'object':
											haveString = true;
											return null;
											break;
										case 'string':
											haveString = true;
											return null;
											break;
										case 'symbol':
											haveString = true;
											return null;
											break;
										case 'undefined':
											haveString = true;
											return null;
											break;
										default:
                                            arrayObject_1.push(e)
											return e;
									}
							}
						});
                    let nB = -1
                    let passedError = 0
                    arrayObject_1.map(e => {
                        nB++
                       
                        switch(e) {
                            case '+':
                                passedError++
                            break;
                            case '%':
                                passedError++
                            break;
                            case '/':
                                passedError++
                            break;
                            case '*':
                                passedError++
                            break;
                            default:
                                if (passedError > 1) {
                                    invalidreturn = true
                                } else {
                                    passedError = 0
                                }
                        }
                        
                    })
				}
       
                if (invalidreturn === true) {
                    data = {
						error: true,
						errorInfo: 6,
						time:
							Date.now() -
							time,
						input: `${b.join(
							''
						)}`,
						result: 0,
					};
                    return
                }

				if (haveNaN === true) {
					data = {
						error: true,
						errorInfo: 3,
						time:
							Date.now() -
							time,
						input: `${b.join(
							''
						)}`,
						result: 0,
					};
					return;
				}
				if (haveString === true) {
					data = {
						error: true,
						errorInfo: 2,
						time:
							Date.now() -
							time,
						input: `${b.join(
							''
						)}`,
						result: 0,
					};
					return;
				}
				data = {
					error: false,
					errorInfo: 0,
					time: Date.now() - time,
					input: `${b.join('')}`,
					result: Number(
						`${eval(
							`${b.join(
								''
							)}`
						)}`
					),
				};
			} catch (e) {
				data = {
					error: true,
					errorInfo: 4,
					exception: e,
					time: Date.now() - time,
					input: `${calc}`,
					result: 0,
				};
			}
		}
		calcResult();
		return data;
	}
};
