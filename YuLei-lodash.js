var YuLei = {

	chunk: function(arr, m) {
		var result = []
		var temp = []
		for (var i = 0; i < arr.length; i++) {
			var j = i % m
			temp.push(arr[i])
			if (j == m - 1 || i == arr.length - 1) {
				result.push(temp)
				j = 0
				temp = []
			}
		}
		return result
	},

	compact: function(arr) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != false) {
				result.push(arr[i])
			}
		}
		return result
	},

	concat: function(arr, value) {

	},


	difference: function(arr, value) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			var temp = arr[i]
			var count = 0
			for (var j = 0; j < value.length; j++) {
				if (value[j] != temp) {
					count++
				}
				if (count == value.length) {
					result.push(temp)
					count = 0
				}
			}
		}
		return result
	},


	drop: function(arr, value) {
		for (i = 0; i < value; i++) {
			var result = arr.shift(0)
		}
		return arr
	},


	dropRight: function(arr, value) {
		for (i = 0; i < value; i++) {
			var result = arr.pop(0)
		}
		return arr
	},


	fill: function(arr, value, start, end) {
		if (!start) {
			start = 0
		}
		if (!end) {
			end = arr.length
		}
		arr.splice(start, end - start)
		for (var i = 0; i < end - start; i++) {
			arr.splice(start + i, 0, value)
		}
		return arr
	},


	flatten: function(arr) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			if (typeof arr[i] == 'object') {
				for (var j = 0; j < arr[i].length; j++) {
					result.push(arr[i][j])
				}
			}
			var lab = i
		}
		for (var k = 0; k < lab; k++) {
			result.unshift(arr[k])
		}
		return result
	}
}
