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
    commentizer("Check the first one. Remember, an SVG animation will animate the rotation of an image, as opposed to a gif which is a series of raster images displayed one after another.")

if answer4 == True:
    is_correct = is_correct and True
else:
    is_correct = is_correct and False
    commentizer("Check the second one. Will the image be reused? If so, an external file probably makes more sense.")

if is_correct:
    commentizer("Great job!")
    commentizer("![Dog spinning on turntable](http://cdn2.cagepotato.com/wp-content/uploads/2014/01/1235732758_dog_spinning_pn_turntable.gif) I love the internet :)")

grade_result["comment"] = "\n\n".join(comments)
grade_result["correct"] = is_correct