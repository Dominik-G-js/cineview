"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

// 1. Definujeme "tvar" dat a validační pravidla pomocí Zod
const formSchema = z.object({
  reviewText: z.string().min(10, {
    message: "Recenze musí mít alespoň 10 znaků.",
  }).max(500, {
    message: "Recenze nesmí být delší než 500 znaků.",
  }),
})

const ReviewForm = () => {
  // 2. Nastavíme náš formulář pomocí React Hook Form a propojíme ho se Zod schématem
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reviewText: "",
    },
  })

  // 3. Funkce, která se zavolá po úspěšném odeslání validního formuláře
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Odeslaná recenze:", values)
    // Zde by v reálné aplikaci proběhlo volání API pro uložení recenze
    alert("Děkujeme za recenzi! Zobrazí se v konzoli.")
    form.reset(); // Vyčistí formulář po odeslání
  }

  return (
    <div className="mt-10 pt-6 border-t border-border">
      <h3 className="text-2xl font-bold mb-4">Napište recenzi</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="reviewText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vaše recenze</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Napište, co si o filmu myslíte..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage /> {/* Zde se zobrazí validační chyby */}
              </FormItem>
            )}
          />
          <Button type="submit">Odeslat recenzi</Button>
        </form>
      </Form>
    </div>
  )
}

export default ReviewForm