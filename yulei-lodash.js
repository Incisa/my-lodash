YuLei = {

	chunk: function(arr, n) {
		var result = []
		var tmp = []

		for (var i = 0; i < arr.length; i++) {
			tmp.push(arr[i])
			if (i % n == (n - 1)) {
				result.push(tmp)
				tmp = []
			}
		}

		result.push(tmp)

		return result
	}

		compact: function(arr) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != false) {
				result.push(arr[i])
			}
		}
		return result
	}

		concat: function(arr, value) {

	}


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
	}


		drop: function(arr, value)
}
