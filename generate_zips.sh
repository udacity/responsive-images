# Run in root to create fresh zips for students in downloads/

Output_zip () {
  rm -rf $1.zip
  cp -rf $2 $1
  zip -r $1.zip $1
  rm -rf $1
}

pushd project/lesson2/
Output_zip Project-Part-1-Start start
popd
mv project/lesson2/Project-Part-1-Start.zip downloads/RI-Project-Part-1-Start.zip

pushd project/lesson3/
Output_zip Project-Part-1-Solution start
Output_zip Project-Part-2-Start start
popd
mv project/lesson3/Project-Part-2-Start.zip downloads/RI-Project-Part-2-Start.zip
mv project/lesson3/Project-Part-1-Solution.zip downloads/RI-Project-Part-1-Solution.zip

pushd project/lesson4/
Output_zip Project-Part-2-Solution start
Output_zip Project-Part-3-Start start
Output_zip Project-Part-3-Solution final
popd
mv project/lesson4/Project-Part-2-Solution.zip downloads/RI-Project-Part-2-Solution.zip
mv project/lesson4/Project-Part-3-Start.zip downloads/RI-Project-Part-3-Start.zip
mv project/lesson4/Project-Part-3-Solution.zip downloads/RI-Project-Part-3-Solution.zip