.data
A: .long 0                                          # Define variables A, B, & result and initialize them to 0
B: .long 0
result: .long 0
promptA: .string "Enter the value of A: "           # Creating prompt strings for when the program asks for user input
promptB: .string "Enter the value of B: "
resultMsg: .string "Result: %d\n"                   # "Result:" in terminal
scanfFmtA: .string "%ld"                            # Format the string to take input from scanf for each variable
scanfFmtB: .string "%ld" 

.section .rodata                                    # start of read-only data section
                                                    # constants here, such as strings
                                                    # modifying these during runtime causes a segmentation fault, so be cautious!
five: .long 5                                       # Establish 5 as varaible value to be used in problem_1

.text                                               # start of text/code
                                                    # everything inside .text is read-only, which includes your code!
.global main                                        # required, tells gcc where to begin execution

# === functions here ===
main:                                               # start of main() function
                                                    # preamble
    pushq %rbp
    movq %rsp, %rbp

# === code here ===
                                                    # Get user input for A                      
    movq $promptA, %rdi
    call printf                                     # Prints promptA
    movq $scanfFmtA, %rdi                           
    leaq A(%rip), %rsi          
    call scanf                                      # Ask for user input 

                                                    # Get user input for B (same process as promptA)
    movq $promptB, %rdi
    call printf
    movq $scanfFmtB, %rdi
    leaq B(%rip), %rsi
    call scanf                                      

                                                    # Call functions for each problem
    call problem_1
    call problem_2
    call problem_3

    movq $0, %rax                                   # Set return value to 0
    leave                                           # Restore stack pointer
    ret                                             # Return from main function


problem_1:                                                              # A * 5
    movl A(%rip), %eax                                                  # Move A into eax
    movl five(%rip), %ebx                                               # Move 5 into ebx
    imull %ebx, %eax                                                    # Multiply A * 5
    movl %eax, result(%rip)                                             # Move result into result variable
    movq $resultMsg, %rdi
    movl result(%rip), %esi
    xorl %eax, %eax                                                     # Clear %eax by XOR-ing it with itself
    call printf                                                         # Print result of problem_1
    ret                                                                 # Return from problem_1


problem_2:
                                                    # (A + B) - (A / B)
    movl A(%rip), %eax                              # Move A into eax
    addl B(%rip), %eax                              # A + B
    movl A(%rip), %ebx                              # Move result of A + B to ebx
    cltd                                            # Extend sign eax into edx:eax  ||from https://docs.oracle.com/cd/E19455-01/806-3773/instructionset-49/index.html
    idivl B(%rip)                                   # using integer division, so results will be different than normal division, however still correct under the rules of integer division.
    subl %eax, %ebx                                 # Subtract the quotient from A
    addl %ebx, %eax                                 # Add B to the result
    movl %eax, result(%rip)                         # Move the result into result variable slot
    movq $resultMsg, %rdi                           # Pass the address of the format string
    movl result(%rip), %esi                        
    xorl %eax, %eax                                 # Clear %eax by XOR-ing it with itself
    call printf                                     # Print result of problem_2
    ret                                             # Returns from problem_2

problem_3:
                                                    # (A - B) + (A * B)
    movl A(%rip), %eax                              # Begin function by loading A into eax
    subl B(%rip), %eax                              # Subtract B from eax
    movl A(%rip), %ebx                              # Load A into ebx
    imull B(%rip), %ebx                             # Multiply A and B and store in ebx
    addl %ebx, %eax                                 # Add multiplication result into eax
    movl %eax, result(%rip)                         # Take resulting value and put into result
    movq $resultMsg, %rdi                          
    movl result(%rip), %esi
    xorl %eax, %eax                                 # Clear %eax by XOR-ing it with itself
    call printf                                     # Print result of problem_3
    ret                                             # Return from problem_3
    