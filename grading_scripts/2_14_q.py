answer1 = widget_inputs["radio1"]
answer2 = widget_inputs["radio2"]
answer3 = widget_inputs["radio3"]
answer4 = widget_inputs["radio4"]
answer5 = widget_inputs["radio5"]
answer6 = widget_inputs["radio6"]
answer7 = widget_inputs["radio7"]
answer8 = widget_inputs["radio8"]
answer9 = widget_inputs["radio9"]
answer10 = widget_inputs["radio10"]

is_correct = False

comments = []
def commentizer(new):
    if new not in comments:
        comments.append(new)

if answer2 == True:
    is_correct = True
else:
    is_correct = is_correct and False
    commentizer("Check the Chrome logo.")

if answer3 == True:
    is_correct = is_correct and True
else:
    is_correct = is_correct and False
    commentizer("Check the kitten photo.")

if answer6 == True:
    is_correct = is_correct and True
else:
    is_correct = is_correct and False
    commentizer("Check the Mexican flag. It's vector, believe it or not.")

if answer8 == True:
    is_correct = is_correct and True
else:
    is_correct = is_correct and False
    commentizer("Check the repeat background.")

if answer9 == True:
    is_correct = is_correct and True
else:
    is_correct = is_correct and False
    commentizer("Check the gradient background.")

if is_correct:
    commentizer("Great job! You're starting to learn how to decide between raster and vector options.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct