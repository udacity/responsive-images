answer1 = widget_inputs["radio1"]
answer2 = widget_inputs["radio2"]
answer3 = widget_inputs["radio3"]
answer4 = widget_inputs["radio4"]

is_correct = False

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

if answer2 == True:
    is_correct = True
else:
    is_correct = is_correct and False
    commentizer("Check the first one. Remember, your site is displaying photographs created as jpgs.")

if not answer3 and not answer4:
    is_correct = is_correct and False
    commentizer("Make sure you pick an option for the second question!")

if answer3 == True:
    commentizer("Inline works, but watch the solution and find out why an external file could work too.")
elif answer4 == True:
    commentizer("External works, but watch the solution and find out why an inline link could work too.")

if is_correct:
    commentizer("Great job! You're getting better at thinking through your image options in different situations.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct