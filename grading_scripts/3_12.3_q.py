answer1 = widget_inputs["radio1"]
answer2 = widget_inputs["radio2"]
answer3 = widget_inputs["radio3"]
answer4 = widget_inputs["radio4"]

is_correct = False

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

if answer1 == True:
    is_correct = True
else:
    is_correct = is_correct and False
    commentizer("Check the first one. Remember, vector images scale nicely and this logo seems simple enough to be vector.")

if answer4 == True:
    is_correct = is_correct and True
else:
    is_correct = is_correct and False
    commentizer("Check the second one. Will the image be reused? If so, an external file probably makes more sense.")

if is_correct:
    commentizer("Great job! You're getting better at thinking through your image options in different situations.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct