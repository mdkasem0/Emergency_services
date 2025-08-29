1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans: getElementById - HTML হতে  id অনুসারে  এলিমেন্ট খুঁজে দেয়।

getElementsByClassName- HTML হতে class অনুসারে  এলিমেন্ট খুঁজে দেয়।

querySelectorAll- CSS সিলেক্টরের মতো এলিমেন্ট খুঁজে  দেয়।

2. How do you create and insert a new element into the DOM?

ans: 
প্রথমে নতুন এলিমেন্ট তৈরি করে DOM যুক্ত করতে হবে এরপরে এলিমেন্ট গুলোতে কন্টেন্ট এড করতে হবে,

DOM-এ  এলিমেন্ট খুঁজে  DOM এড করা।

3. What is Event Bubbling and how does it work?
ans:
কোনো ইভেন্ট প্রথমে ভিতরের এলিমেন্টে হয়, তারপর উপরের  দিকে বাবলের মতো parent element এ যায়।


4. What is Event Delegation in JavaScript? Why is it useful?
answer:

Event Delegation হলো parent element-এ ইভেন্ট লিসেনার বসিয়ে child element-এর ইভেন্ট হ্যান্ডল করা, যেখানে কম কোড লিখে ইভেন্ট হ্যান্ডেল করা যায়।


5. What is the difference between preventDefault() and stopPropagation() methods?

answer:
preventDefault() মেথড মূলত ব্রাউজারের ডিফল্ট ইভেন্ট থামিয়ে দেয়।
stopPropagation() মেথড ইভেন্ট বাবলিং থামায়।