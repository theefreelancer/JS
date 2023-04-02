<html>
  <head>
    <title>Student's Page!</title>
  </head>
  <body>
    <h2>Mapping students and their credentials</h2>
    <p>This is the mapping of different students in a heirachy of their names: </p>
    <p id="demo"></p>
    <script>
      const students = [
        {
          firstName: "Vivian",
          lastName: "Nankya"
        },
        {
          firstName: "Eugene",
          lastName: "Mwebe" 
        },
        {
          firstName: "Victoria",
          lastName: "Namutebi"
        }
      ];
      
      document.getElementById("demo").innerHTML = students.map(getCredentials);

      function getCredentials(item){
        return [item.firstName, item.lastName].join(" ");
      }
    </script>
  </body>
</html>