/**
 * Hàm trả về 1 chuỗi và trả về là  các thành phần trong chuỗi đảo ngược
 * @param {*} String: chuỗi nhận vào cần đảo ngược 
 * @returns chuỗi trả về đã đảo ngược và giữ nguyên các khoảng trắng
 * Auth: NQH 12/12/2023
 */

function reverseStringWithSpaces(String) {
    // Chuyển chuỗi thành một mảng các ký tự
    const array = String.split("");

    // Lọc ra mảng các ký tự không phải khoảng trắng
    const nonSpaceArray = array.filter((char) => char !== " ");

    // Đảo ngược mảng các ký tự không phải khoảng trắng
    const reversedNonSpaceArray = nonSpaceArray.reverse();

    // Sử dụng map để tạo một mảng mới với các ký tự được đảo ngược, giữ nguyên khoảng trắng
    const reversedArray = array.map((char) =>
        char === " " ? " " : reversedNonSpaceArray.shift()
    );

    // Chuyển mảng thành chuỗi
    const reversedString = reversedArray.join("");

    return reversedString;
}
