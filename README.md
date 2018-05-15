# Tests for Jazz Networks - Hamada Fadil Mahdi
###### I just wanted to give a brief explanation of what I did.
## Contents

1. [__General Programming Questions__](#t1)
   * [Q1 - attempt1](#gq1-a1)
   * [Q1 - attempt2](#gq1-a2)
   * [Q1 - attempt3](#gq1-a3)
   * [Q2](#gq2)
   * [Q3](#gq3)
   * [Q4](#gq4)
   
2. [__Python Programming Questions__](#t2)
   * [Q1](#pq1)
   * [Q2](#pq2)
   * [Q3](#pq3)
    





## <a name="t1"> __1. General Programming Questions__</a>

### <a name="gq1-a1"> Q1 - attempt1</a>
   In my first attempt I realised that every third value is even.
   So I just tried to hard code it at first by finding the even terms of the fibonacci sequence then adding them up.  
   This obviously isn't the most efficient and wouldn't give me the sum of the first 100 even terms quick enough!
### <a name="gq1-a2"> Q1 - attempt2</a>
   So, I began researching on Maths Stack exchange, I did __not__ want to cheat! I was looking for a theorem that I could code up and then I found this: [Closed form for the sum of even fibonacci numbers?](https://math.stackexchange.com/questions/323058/closed-form-for-the-sum-of-even-fibonacci-numbers?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa). More, specifically:   
   
![alt text](https://github.com/HamadaFMahdi/Tests/blob/master/Screen%20Shot%202018-05-15%20at%2001.31.58.png?raw=true)
   
   This allowed me to quickly find the sum without any rigourous computation!!  
   Another issue that I encountered was that, finding the nth term for the Fibonacci sequence using the recursive function was not effeicient enough. So, I headed to maths Stack exchange again and found this: [An nth term for a Fibonacci series?]https://math.stackexchange.com/questions/2293750/an-nth-term-for-a-fibonacci-series. In particular:   
   
![alt text](https://github.com/HamadaFMahdi/Tests/blob/master/Screen%20Shot%202018-05-15%20at%2001.31.58.png?raw=true)   
   __However__, there was an issue. When it came to large numbers. JavaScript began to round them weirdly and I wasn't happy with the result.
### <a name="gq1-a3"> Q1 - attempt3</a>
   Then, after some more brief research I decided to implement big.js which allowed me to manipulate the large numbers better. However, I still wasn't able to get the full answer as it was 63 digits long (apparently, assuming I got it correct). 
### <a name="gq2"> Q2</a>
   With regards to question 2, I have not studies computer science properly except for one module at uni which wasn't extremely thorough. However, I am extremely keen on learning more and solidifying my fundementals God willing!
### <a name="gq3"> Q3</a>
   I really enjoyed this one. I made some assumptions which I hope are reasonable:  
1. The output array must be in Ascending order.
2. That I did not have to remove duplicated and that the length of the output array must be the same as the sum of the 2 original arrays.
### <a name="gq4"> Q4</a>
   This was my faviourite one!   
   I had to do some research at first as to how to convert between the base 10 to another base (I started with 5).  
   I only checked the mathematical method and __no__ code.  
   So, I followed the method through and coded it up, then when it came to adding the letters I realised that I just needed to swap the 10, 11, 12, 13's etc. with A, B, C, D's etc.  
   I was contemplating whether I should just go for a for loop with a huge list of if statements but I __really really__ didn't want to do that.  
   Then by the blessings of God I realised I could use the ASCII conversions!
## <a name="t2"> __2. Python Programming Questions__</a>

### <a name="pq1"> Q1</a>
   Sadly, this is the same as Q2 above.
### <a name="pq2"> Q2</a>
   I did not know this off the top off my head. I had to code it out and see what happens. I tried to give a reason for it but I'm not sure if its correct.  
   However, I'm also very keen on upping my skills in any language and mastering any fundementals needed God willing.
### <a name="pq3"> Q3</a>
   This question was fun, I had to check the syntax for the functions as I had forgotten how to do it from memory. Otherwise, it was pretty straight forward. 













