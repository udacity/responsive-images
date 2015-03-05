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
    commentizer("Open the site and try changing `cover` to `contain` in DevTools to see the difference.")
    commentizer("Check the first one.")

if answer3 == True:
    is_correct = is_correct and True
else:
    is_correct = is_correct and False
    commentizer("Open the site and try changing `cover` to `contain` in DevTools to see the difference.")
    commentizer("Check the second one.")

if is_correct:
    commentizer("Great job! You're starting to learn how to decide between raster and vector options.")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct