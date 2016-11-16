var YuLei = {

	chunk: function(arr, n) {
		var result = []
		var tmp = []

		for (var i = 0; i < arr.length; i++) {
			var m = i % n
			temp.push(arr[i])
			if (m == n - 1 || i == arr.length - 1) {
				result.push(tmp)
				m = 0
				tmp = []
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

	}
}
