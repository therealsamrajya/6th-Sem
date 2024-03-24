using ConsoleApp1;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
  
    class Program
    {
     public static void Main(string[] args)
        {
      List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };

            var querySyntaxResult = from num in numbers
                                    where num % 2 == 0
                                    select num * num;

            Console.WriteLine("Using LINQ query syntax:");
            foreach (var item in querySyntaxResult)
            {
                Console.WriteLine(item);
            }
        }
       
    }
    

}
