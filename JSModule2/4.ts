const compareNum = (a: number, b: number): number => {
    return a - b;
}

let num_list: number[] = []

while (true) {
    let user_prompt: string;
    while (true) {
        user_prompt = prompt("Enter number") || ''
        if (!isNaN(parseFloat(user_prompt))) {
            break
        }
    }

    const user_prompt_num: number = parseFloat(user_prompt)
    if (user_prompt_num == 0) {
        break
    }

    num_list = num_list.concat([user_prompt_num])
    
}

num_list.sort(compareNum)
num_list.reverse()

for (let num of num_list) {
    console.log(num)
}