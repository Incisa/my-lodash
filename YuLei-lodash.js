/**
 * 注释说明：
 * 这个是干嘛的
 * 参数是干嘛的
 * 返回什么
 * 例子
 * 如非刻意，不要更改函数的实际传入的参数值（注：已中枪，抽空要改）
 */


var YuLei = {

	/**
	 * 将数组拆分成多个 size 长度的块，并组成一个新数组。 
	 * 如果数组无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。
	 * arr：需要被处理的数组，
	 * m ：数组长度，
	 * return ：新组成的数组，
	 * 例：
	 * _.chunk(['a', 'b', 'c', 'd'], 2);
	 * // => [['a', 'b'], ['c', 'd']]
	 * _.chunk(['a', 'b', 'c', 'd'], 3);
	 * // => [['a', 'b', 'c'], ['d']]
	 */

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


	/**
	 * 创建一个移除了所有假值的数组。
	 * 例如：false、null、 0、""、undefined， 以及NaN 都是 “假值”.
	 * arr：需要被处理的数组，
	 * return ：新组成的数组，
	 * 例：
	 * _.compact([0, 1, false, 2, '', 3]);
	 * // => [1, 2, 3]
	 */

	compact: function(arr) {
		var result = []
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] != false) {
				result.push(arr[i])
			}
		}
		return result
	},


	/**
	 * 创建一个用任何数组 或 值连接的新数组。
	 * arr：需要被处理的数组，
	 * value：需要被连接的值的队列,
	 * return ：连接后的新数组,
	 * 例：
	 * var array = [1];
	 * var other = _.concat(array, 2, [3], [[4]]);
	 * console.log(other);
	 * // => [1, 2, 3, [4]]
	 * console.log(array);
	 * // => [1]
	 */

	concat: function(arr, value) {

	},


	/**
	 * 创建一个差异化后的数组。
	 * arr：需要被处理的数组，
	 * value：用于对比差异的数组，
	 * return ：返回一个差异化后的新数组。
	 * 例：
	 * _.compact([0, 1, false, 2, '', 3]);
	 * // => [1, 2, 3]
	 */

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


	/**
	 * 裁剪数组中的前 N 个数组，返回剩余的部分。
	 * arr：需要被处理的数组，
	 * value：裁剪的个数，
	 * return ：返回数组的剩余的部分。
	 * 例：
	 * _.drop([1, 2, 3]);
	 * // => [2, 3]
	 *
	 * _.drop([1, 2, 3], 2);
	 * // => [3]
	 *
	 * _.drop([1, 2, 3], 5);
	 * // => []
	 *
	 * _.drop([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 */

	drop: function(arr, value) {
		for (i = 0; i < value; i++) {
			var result = arr.shift(0)
		}
		return arr
	},


	/**
	 * 从右边开始裁剪数组中的 N 个数组，返回剩余的部分。
	 * arr：需要被处理的数组，
	 * value：裁剪的个数，
	 * return ：返回数组的剩余的部分。
	 * 例：
	 * _.dropRight([1, 2, 3]);
	 * // => [1, 2]
	 *
	 * _.dropRight([1, 2, 3], 2);
	 * // => [1]
	 *
	 * _.dropRight([1, 2, 3], 5);
	 * // => []
	 *
	 * _.dropRight([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 */

	dropRight: function(arr, value) {
		for (i = 0; i < value; i++) {
			var result = arr.pop(0)
		}
		return arr
	},


	/**
	 * 指定 值 填充数组，从 start 到 end 的位置，但不包括 end 本身的位置。
	 * 注意: 这个方法会改变数组
	 * arr：需要填充的数组，
	 * value：填充的值，
	 * start：开始位置，
	 * end：结束位置。
	 * return ：返回数组。
	 * 例：
	 * var array = [1, 2, 3];
	 * 
	 * _.fill(array, 'a');
	 * console.log(array);
	 * // => ['a', 'a', 'a']
	 *
	 * _.fill(Array(3), 2);
	 * // => [2, 2, 2]
	 *
	 * _.fill([4, 6, 8, 10], '*', 1, 3);
	 * // => [4, '*', '*', 10]
	 */

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


	/**
	 * 向上一级展平数组嵌套。
	 * arr：需要展平的数组，
	 * return ：返回展平后的新数组。
	 * 例：
	 * _.flatten([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, [3, [4]], 5]
	 */

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
	},


	/**
	 * 递归展平。
	 * arr：需要展平的数组，
	 * return ：返回展平后的新数组。
	 * 例：
	 * _.flattenDeep([1, [2, [3, [4]], 5]]);
	 * // => [1, 2, 3, 4, 5]
	 */

	flattenDeep: function(arr) {

		function flattenOnce(arr) {
			var result = []
			var l = arr.length
			for (var i = 0; i <= l; i++) {
				if (typeof arr[i] == 'object') {
					for (var j = 0; j < arr[i].length; j++) {
						result.push(arr[i][j])
					}
				}
				if (typeof arr[i] == 'number') {
					result.push(arr[i])
				}
			}
			return result
		}
		var newResult = flattenOnce(arr)
		for (var i = 0; i < newResult.length; i++) {
			if (typeof newResult[i] == 'object') {
				newResult = flattenOnce(newResult)
			}
		}
		return newResult
	},


	/**
	 * 反向版 _.toPairs，这个方法返回一个由键值对构成的对象。
	 * arr：键值对，
	 * return ：返回一个新对象。
	 * 例：
	 * _.fromPairs([['fred', 30], ['barney', 40]]);
	 * // => { 'fred': 30, 'barney': 40 }
	 */

	fromPairs: function(arr) {
		var obj = {}
		for (i = 0; i < arr.length; i++) {
			for (j = 0; j < arr[i].length - 1; j++) {
				obj[arr[i][j]] = arr[i][j + 1]
			}
		}
		return obj
	},


	/**
	 * 获取数组中除了最后一个元素之外的所有元素
	 * arr：需要检索的数组 (Array)
	 * return ：返回没有最后一个元素的数组
	 * 例：
	 * _.initial([1, 2, 3]);
	 * // => [1, 2]
	 */

	initial: function(arr) {
		var result = []
		for (i = 0; i < arr.length - 1; i++) {
			result.push(arr[i])
		}
		return result
	},


	/**
	 * 创建一个包含所有使用 SameValueZero 进行等值比较后筛选的唯一值数组。
	 * arr：需要处理的数组队列，
	 * return ：返回数组中所有数组共享元素的新数组。
	 * 例：
	 * _.intersection([2, 1], [2, 3]);
	 * // => [2]
	 */

	intersection: function(arr1, arr2) {
		var bigArr = [arr1, arr2]
		var common = []
		for (i = 0; i < bigArr.length - 1; i++) {
			for (j = 0; j < arr1.length; j++) {
				if (bigArr[i][j] == bigArr[i + 1][j]) {
					common.push(bigArr[i][j])
					return common
				}
			}
		}
	},


	/**
	 * 移除所有经过 SameValueZero 等值比较为 true 的元素,
	 * 注意: 不同于 _.without，这个方法会改变数组。
	 * arr：需要调整的数组,
	 * value：要移除的值,
	 * return ：返回数组本身。
	 * 例：
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pull(array, 'a', 'c');
	 * console.log(array);
	 * // => ['b', 'b']
	 */

	pull: function(arr, value1, value2) {
		for (i = arr.length - 1; i >= 0; i--) {
			if (arr[i] == value1) {
				arr.splice(i, 1)
			}
		}
		for (i = arr.length - 1; i >= 0; i--) {
			if (arr[i] == value2) {
				arr.splice(i, 1)
			}
		}

		return arr
	},


	/**
	 * 这个方式类似 _.pull，除了它接受数组形式的一系列值。
	 * 注意: 不同于 _.difference，这个方法会改变数组。
	 * arr：需要调整的数组,
	 * value：要移除的值,
	 * return ：返回数组本身。
	 * 例：
	 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	 *
	 * _.pullAll(array, ['a', 'c']);
	 * console.log(array);
	 * // => ['b', 'b']
	 */

	pullAll: function(arr, value) {
		for (k = 0; k <= value.length; k++) {
			for (i = arr.length - 1; i >= 0; i--) {
				if (arr[i] == value[k]) {
					arr.splice(i, 1)
				}
			}
		}
		return arr
	},


	/**
	 * 根据给的 indexes 移除对应的数组元素并返回被移除的元素。
	 * 注意: 不同于 _.at，这个方法会改变数组。
	 * arr：需要调整的数组,
	 * index：可以是特殊的数组队列，或者个别的单个或多个参数,
	 * return ：返回被移除的元素数组。
	 * 例：
	 * var array = ['a', 'b', 'c', 'd'];
	 * var pulled = _.pullAt(array, [1, 3]);
	 *
	 * console.log(array);
	 * // => ['a', 'c']
	 *
	 * console.log(pulled);
	 * // => ['b', 'd']
	 */

	pullAt: function(arr, index) {
		var start = index[0]
		var end = index[1]
		var out1 = arr.splice(start, 1)
		var tmp = ''
		arr.splice(start, 0, tmp)
		var out2 = arr.splice(end, 1)
		var pulled = out1.concat(out2)
		return pulled
	},


	/**
	 * 将数组最前面的元素返回置数组尾部。
	 * arr：需要调整的数组,
	 * return ：返回调整后的数组。
	 * 例：
	 * var array = [1, 2, 3];
	 *
	 * _.reverse(array);
	 * // => [3, 2, 1]
	 *
	 * console.log(array);
	 * // => [3, 2, 1]
	 */

	reserve: function(arr) {
		var result = []
		for (i = 0; i < arr.length; i++) {
			result.unshift(arr[i])
		}
		return result
	},


	/**
	 * 以 separator 拆分字符串。
	 * 注意: 这个方法基于 String#split。
	 * str：要拆分的字符串,
	 * separa：拆分的分隔符,
	 * limit：限制的数量。
	 * return：返回拆分部分的字符串的数组。
	 * 例：
	 * _.split('a-b-c', '-', 2);
	 * // => ['a', 'b']
	 */

	split: function(str, separa, limit) {
		var arr = []
		arr.push(str)
		var stringScarp = arr[0].split(separa)
		var result = stringScarp.splice(0, limit)
		return result
	},


	/**
	 * 获取数组中除了第一个元素的剩余数组。
	 * arr：要检索的数组,
	 * return：返回数组中除了第一个元素的剩余数组。
	 * 例：
	 * _.tail([1, 2, 3]);
	 * // => [2, 3]
	 */

	tail: function(arr) {
		var result = arr.splice(1, arr.length)
		return result
	},


	/**
	 * 获取数组中第一个元素。
	 * arr：要检索的数组,
	 * return：返回数组中第一个元素。
	 * 例：
	 * _.head([1, 2, 3]);
	 * // => 1
	 *
	 * _.head([]);
	 * // => undefined
	 */

	head: function(arr) {
		var result = arr.splice(0, 1)
		return result
	},


}
