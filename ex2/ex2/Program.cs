// See https://aka.ms/new-console-template for more information
using System;
using System.Runtime.CompilerServices;

namespace ex2
{
    internal class Program
    {
        static void Main()
        {
            Console.WriteLine("the tap 1 rectangle, 2 triangle, 3 exit");
            int x = Convert.ToInt32(Console.ReadLine());
            while (x != 3)
            {
                if (x == 1)
                {
                    Console.WriteLine("the tap height Rectangle");
                    int h = Convert.ToInt32(Console.ReadLine());
                    while (h < 2)
                    {
                        Console.WriteLine("Height must be greater than or equal to 2");
                        Console.WriteLine("the tap height Rectangle");
                        h = Convert.ToInt32(Console.ReadLine());
                    }
                    Console.WriteLine("the tap width Rectangle");
                    int w = Convert.ToInt32(Console.ReadLine());
                    // Create a Rectangle
                    Rectangle r = new Rectangle(w, h);
                }
                else if (x == 2)
                {
                    Console.WriteLine("the tap height triangle");
                    int h = Convert.ToInt32(Console.ReadLine());
                    Console.WriteLine("the tap width triangle");
                    int w = Convert.ToInt32(Console.ReadLine());
                    if (h < 2)
                    {
                        Console.WriteLine("Height must be greater than or equal to 2");
                        Console.WriteLine("the tap height triangle");
                        h = Convert.ToInt32(Console.ReadLine());
                    }
                    Triangular t = new Triangular(h, w);
                    Console.WriteLine("the tap 1 to calculate scope, 2 to printing");
                    int y = Convert.ToInt32(Console.ReadLine());
                    if (y == 1)
                    {
                        Console.WriteLine(t.Scope());
                    }
                    else { t.print(); }
                }
                //If different from 1 and 2 and 3
                else
                {
                    Console.WriteLine("you can the tap only 1,2 or 3");
                }
                Console.WriteLine("the tap 1 rectangle, 2 triangle, 3 exit");
                x = Convert.ToInt32(Console.ReadLine());
            }
        }
    }
}