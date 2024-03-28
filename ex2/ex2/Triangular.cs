using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ex2
{
    internal class Triangular:Tower
    {
        public Triangular(int height, int width) : base(height, width)
        {
        }
        public override int Scope()
        {
            int x = (int)Math.Sqrt(Math.Pow(Width / 2, 2) + Math.Pow(Height, 2));
            return x * 2 + Width;
        }
        public override int Area()
        {
            return (Height * Width) / 2;
        }
        public void print()
        {
            if (Width % 2 == 0 || (Height * 2) < Width)
            {
                Console.WriteLine("is not possible to print the Triangular.");
            }
            else
            {
                int numRows = Height > 2 && Width > 3 ? ((Height - 2) / (Width / 2 - 1)) : Width > 3 ? 0 : Height - 2;
                int upRows = (Height - 2 - numRows * (Width / 2 - 1)) + numRows;
                int space = Width / 2;
                int difference = upRows - numRows;
                bool flag = false;
                int num = 1;
                for (int i = 0; i < Height - 1; i++)
                {   
                    for(int k=0;k< space; k++)
                    {
                        Console.Write(" ");
                    }
                    for (int j = 0; j < num; j++)
                    {
                        Console.Write("*");
                    }

                    if (!flag)
                    {
                        if (i == 0)
                        {
                            num += 2;
                            space--;
                        }
                        else if (i % upRows == 0)
                        {
                            num += 2;
                            space--;
                            flag = true;
                        }

                    }
                    else if ((i - difference) % numRows == 0)
                    {
                        num += 2;
                        space--;
                    }
                    Console.WriteLine();
                }
                for (int i = 0; i < Width; i++)
                {
                    Console.Write("*");
                }

                Console.WriteLine();
            }
        }

    }
}
