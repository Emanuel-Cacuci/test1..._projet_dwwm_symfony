<?php

namespace App\Controller;

use App\Form\ContactType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Attribute\Route;

final class ContactController extends AbstractController
{
    #[Route('/contact', name: 'app_contact')]
    public function index(Request $request, MailerInterface $mailer): Response
    {
       $form = $this->createForm(ContactType::class);

       $form->handleRequest($request);

       if ($form->isSubmitted() && $form->isValid()){

            $data = $form->getData();
           
            $adress = $data['email'];
            $message = $data['message']; 

            $email = (new Email())
            ->from($adress)
            ->to('emanuelcacucipro@gmail.com')
            ->subject('demande de contact')
            ->text($message);

            $mailer->send($email);

            // ->html('<p>See twig integration for better HTML integration!</p>');

       }


        return $this->render('contact/index.html.twig', [
            'contact' => 'Nous contacter',
            'formulaire' =>$form
        ]);
    }
}
