describe("Bubble Sort", function() {
    it("handles an empty array", function() {
        expect(bubbleSort([])).toEqual( [] );
    });
    it("handles an array of a single element by returning the same array", function() {
        expect(bubbleSort([1])).toEqual( [1] );
    });
    it("takes in an array of multiple elements by returning the array with the elements sorted", function() {
        expect(bubbleSort([2,1])).toEqual( [1,2] );
    });
});