const __error_prefix = 'option error: '
const __exception_base = function(message){
	this.message = __error_prefix+message
}
const __default_callback = (e,i,p)=>{ console.log(e,i,p) }

var Options = module.exports = {

	test: function(key, callback, num_arg, options_array){
		if(typeof options_array == 'string') options_array = options_array.split(/\s+/)
		var argv = options_array instanceof Array ? options_array : process.argv.slice(isNaN(options_array)?2:options_array)
		var __test
		if(key instanceof RegExp) __test = (item,key)=>{ return item.match(key) }
		else if(key instanceof Array) __test = (item,key)=>{ return key.indexOf(item)>=0  }
		else __test = (item,key)=>{ return item == key }

		if(callback instanceof Function){
			var res = null
			argv.forEach((item,index,options)=>{
				if(__test(item,key)){
					var args = []
					if(!isNaN(num_arg)){
						for(var i=1; i<=num_arg; i++){
							if(options[index+i] != undefined) args.push(options[index+i])
							else throw new Options.missingException('Variable missing for option '+key)
						}
					}
					res = callback(item,index,args)
					return
				}
			})
			return res
		}
		else {
			for(var k of arguments){
				for(var i of argv){
					if(__test(i,k)) return true
				}
			}
			return false
		}
	},

	getOpt: function(options, slice, rules){
		if(options == undefined){ options = process.argv; slice = arguments.length < 2 ? 2 : slice }
		if(slice == undefined) slice = 0

		var obj = function(){
			var _options = options ? options.slice(slice) : []
			this.test = function(key, callback, num_arg){
				return Options.test(key, callback, num_arg, _options)
			}
			this.testRules = function(rules){
				rules = rules instanceof Array ? rules : []
				rules.forEach((e)=>{
						Options.test(e.key, e.callback || __default_callback, e.args || 0, _options)
				})
			}
			this.it = function*(){
				for(var e of _options) yield e
			}

		}
		return new obj()
	},

	missingException: function(message){
		__exception_base.call(this,message)
		this.prototype = __exception_base.prototype
   		this.name = "ExceptionMissingOption"
	},
	formatException: function(message){
		__exception_base.call(this,message)
		this.prototype = __exception_base.prototype
   		this.name = "ExceptionFormatOption"
	},
}